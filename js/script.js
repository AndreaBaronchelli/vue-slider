/****************************************************************
 * VUE SLIDER
 ****************************************************************/

const app = new Vue({
    el: "#app",
    data: {
        photos: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
        ],
        photosIndex: 0,
    },
    methods: {
        next() {
            this.photosIndex++;
            if(this.photosIndex > this.photos.length - 1) {
                this.photosIndex = 0;
            }
        },
        prev() {
            this.photosIndex--;
            if(this.photosIndex < 0) {
                this.photosIndex = this.photos.length - 1;
            }
        },
        setPhoto(index) {
            this.photosIndex = index;
        },
    }
});