const mongoose = require('mongoose');

module.exports = () => {

        mongoose.connect("mongodb+srv://EndOrther:ender123@endorther.hwiy0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useNewUrlParser: true,
                useFindAndModify: false
        }).then(() => console.log("Connect to the Database"))
}