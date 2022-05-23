class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        quantity = Number(quantity);
        articleModel = articleModel.toLowerCase();

        let newObj = {
            articleModel,
            articleName,
            quantity
        }

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        }

        let searchedObj = this.listOfArticles.find(n => n.articleName == articleName)

        if (searchedObj !== undefined) {
            searchedObj.quantity += quantity;
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }

        this.listOfArticles.push(newObj);

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

        }

    inviteGuest ( guestName, personality) {
        let newGuest = {
            guestName,
            points: 0,
            purchaseArticle: 0
        }

        let searchedGuest = this.guests.find(g => g.guestName == guestName);

        if (searchedGuest !== undefined) {
            throw new Error(`${guestName} has already been invited.`)
        }

        if (personality === 'Vip') {
            newGuest.points = 500;
        
        } else if (personality === 'Middle') {
            newGuest.points = 250;
        
        } else {
            newGuest.points = 50;
        }

        this.guests.push(newGuest);

        return `You have successfully invited ${guestName}!`   
    }

    buyArticle ( articleModel, articleName, guestName) {

        let searchedArticle = this.listOfArticles.find(a => a.articleName == articleName && a.articleModel == articleModel);
        let searchedGuest = this.guests.find(g => g.guestName == guestName);

        if (searchedArticle == undefined) {
            throw new Error(`This article is not found.`)
        }

        if (searchedArticle.quantity == 0) {
            return `The ${articleName} is not available.`
        }

        if (searchedGuest == undefined) {
            return `This guest is not invited.`
        }

        if (searchedGuest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`

        } else {
            searchedGuest.points -= this.possibleArticles[articleModel];
            searchedGuest.purchaseArticle++;
            searchedArticle.quantity--;

            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }
    }

    showGalleryInfo (criteria) {
        if (criteria == 'article') {
            let result = ['Articles information:',];
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))
            
            return result.join('\n');
        }

        if (criteria == 'guest') {
            let result = [`Guests information:`];
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`))
            
            return result.join('\n');
        }
    }

    }

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// console.log(artGallery.addArticle('none', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

// let art = new ArtGallery("Curtis Mayfield");

// art.addArticle('picture', 'Mona Liza', 3);
// art.addArticle('Item', 'Ancient vase', 2);
// art.addArticle('picture', 'Mona Liza', 1);

// art.inviteGuest('John', 'Vip');
// art.inviteGuest('Peter', 'Middle');

// art.buyArticle('picture', 'Mona Liza', 'John');
// art.buyArticle('item', 'Ancient vase', 'Peter');