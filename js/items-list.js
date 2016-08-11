window.ItemsList = {

    init: function () {
        Data.items.forEach(function (item) {
            switch (item.type) {

                case CONST.VIDEO:
                    Video.add(item);
                    break;

                case CONST.IMAGE:

                case CONST.SONG:

                default:
                    throw "unsupported type";
            }
        });
    }
}

