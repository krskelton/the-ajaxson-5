
var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: null,
            errorMessage: null,
            loading: false,
            imgSrc: null,
            captcha: null
        };
    },
    methods: {
        fetchGif: function() {
            if(this.captcha != 5){
                this.errorMessage = 'No GIFs for you';
                this.imgSrc = null;
            } else{
                // get the user's input text from the DOM
                var searchQuery = this.tagValue; // TODO should be e.g. "dance"

                // configure a few parameters to attach to our request
                var api_key = "dc6zaTOxFJmzC";
                var tag = "jackson+5+" + searchQuery; // TODO should be e.g. "jackson 5 dance"
                // console.log(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`);

                // TODO what do we want this URL to be?
                fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                    .then(response => response.ok ? response.json() : Promise.reject(response))
                    .then(results => {
                        // if the response comes back successfully, the code in here will execute.

                        console.log("we received a response!");
                        console.log(results);

                        this.imgSrc = results.data.image_url;
                        // console.log(results.data.image_url)

                        this.errorMessage = null;
                        this.loading = null;
                    })
                    .catch(err => {
                        // if something went wrong, the code in here will execute instead of the success function

                        this.loading = false;
                        this.errorMessage = 'Sorry, could not load GIF. Try again!';
                    });
                    this.loading = true;
            }

           
        },
    },
});
