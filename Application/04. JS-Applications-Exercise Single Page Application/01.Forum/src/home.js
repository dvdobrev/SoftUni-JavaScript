import { showDetails } from './details.js';
import { showView, e, makeRequest } from './dom.js';

const section = document.getElementById('homeView');
const topics = section.querySelector('#topicContainer');
const topicForm = section.querySelector('form');
const postBtn = topicForm.querySelector('.public')
const cancelBtn = topicForm.querySelector('.cancel')

postBtn.addEventListener('click', publicTopic);
cancelBtn.addEventListener('click', cancelTopic);

section.remove();

export async function showHome() {
    showView(section);
    topics.replaceChildren(e('p', {}, 'Loading...'))
    await getTopics();
}

async function getTopics() {
    const data = await makeRequest('http://localhost:3030/jsonstore/collections/myboard/posts');
    topics.replaceChildren(...Object.values(data).map(createTopicCard));
}

async function publicTopic(e) {
    e.preventDefault();
    const formData = new FormData(topicForm);
    const newTopicData = {};

    for (const [name, value] of formData.entries()) {
        if (value == '') {
            alert('All fields must be filled!');
            return;
        }
        newTopicData[name] = value;
    }

    newTopicData['time'] = new Date(Date.now());
    newTopicData['ownerImage'] = './static/profile.png';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTopicData)
    }

    const data = await makeRequest('http://localhost:3030/jsonstore/collections/myboard/posts', options);
    topics.appendChild(createTopicCard(data));

    topicForm.reset();
}

function cancelTopic(e) {
    e.preventDefault();
    topicForm.reset();
}

function createTopicCard(topic) {
    const topicTitle =
        e('a', { className: 'normal', href: topic.title },
            e('h2', {}, topic.title)
        );

    topicTitle.addEventListener('click', (e) => {
        e.preventDefault();
        showDetails(topic._id)
    });

    const element =
        e('div', { className: 'topic-name-wrapper' },
            e('div', { className: 'topic-name' },
                topicTitle,
                e('div', { className: 'columns' },
                    e('p', {},
                        'Date: ',
                        e('time', {}, topic.time)
                    ),
                    e('div', { className: 'nick-name' },
                        e('p', {},
                            'Username: ',
                            e('span', {}, topic.author)
                        )
                    )
                )
            )
        );

    return element;
}