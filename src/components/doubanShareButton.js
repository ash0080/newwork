import assert from '../../node_modules/react-share/es/utils/assert';
import objectToGetParams from '../../node_modules/react-share/es/utils/objectToGetParams';
import createShareButton from '../../node_modules/react-share/es/hocs/createShareButton';

function doubanLink(url, _a) {
    var title = _a.title, image = _a.image, name = _a.name;
    assert(url, 'douban.url');
    // https://www.douban.com/share/service?
    // name=如何将"串烤单词" 导出到其它APP? | NEWWORK.CC
    // &href=
    // &image=
    // &updated=
    // &bm=
    // &u=https://newwork.cc/blog/app
    // &title=如何将"串烤单词" 导出到其它APP? | NEWWORK.CC
    return ('https://www.douban.com/share/service' +
        objectToGetParams({
            href: url,
            name: name || title,
            image
        }));
}
const doubanShareButton = createShareButton('douban', doubanLink, function (props) {
    return ({
        title: props.title,
        name: props.name,
        image: props.image,
        text: props.text,
    });
}, {
    windowWidth: 650,
    windowHeight: 450,
});
export default doubanShareButton;
