import { e, makeRequest, showView } from './dom.js';

const section = document.getElementById('detailsView');
const container = section.querySelector('#postContainer');
const name = section.querySelector('.theme-name');

section.querySelector('#answerForm').addEventListener('submit', publicComment);

section.remove();

let currentTopicID = null;

export async function showDetails(topicId) {
    showView(section);
    container.replaceChildren(e('p', {}, 'Loading...'))
    name.replaceChildren();
    currentTopicID = topicId;
    await getTopicData(topicId);
}

async function getTopicData(id) {
    const [data, comments] = await Promise.all([
        makeRequest('http://localhost:3030/jsonstore/collections/myboard/posts/' + id),
        getAllComments(id)
    ]);

    displayTopic(data, comments);
}

function displayTopic(topic, comments) {
    name.replaceChildren(e('h2', {}, topic.title));
    container.replaceChildren(createHeader(topic));
    container.append(...comments.map(createUserComment));
}

async function publicComment(e) {
    e.preventDefault();
    const commentData = {}
    const formData = new FormData(e.target);
    for (const [name, value] of formData.entries()) {
        commentData[name] = value;
    }
    commentData['topicId'] = currentTopicID;
    commentData['time'] = new Date(Date.now());

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    }

    const data = await makeRequest('http://localhost:3030/jsonstore/collections/myboard/comments', options);
    container.append(createUserComment(data));
}

function createHeader(topic) {
    const element =
        e('div', { className: 'header' },
            e('img', { src: topic.ownerImage, alt: 'avatar' }),
            e('p', {},
                e('span', {}, topic.author),
                ' posted on ',
                e('time', {}, topic.time)
            ),
            e('p', { className: 'postContent' }, topic.text)
        );

    return element;
}

function createUserComment(comment) {
    const element =
        e('div', { id: 'user-comment' },
            e('div', { className: 'topic-name-wrapper' },
                e('div', { className: 'topic-name' },
                    e('p', {},
                        e('span', {}, comment.author),
                        ' posted on ',
                        e('time', {}, comment.time)
                    ),
                    e('div', { className: 'post-content' },
                        e('p', {}, comment.content)
                    )
                )
            )
        );

    return element;
}

async function getAllComments(id) {
    const allComments = await makeRequest('http://localhost:3030/jsonstore/collections/myboard/comments');
    return Object.values(allComments).filter(c => c.topicId == id);
}