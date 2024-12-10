module.exports = {
    formatName: function(name){
        let formatName = name.split(' ').join('_')
        return formatName
    }
}