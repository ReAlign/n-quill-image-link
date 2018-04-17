import Quill from 'quill';

class ToolbarImageLink {
    constructor(quill) {
        let imageLinkBtns = document.getElementsByClassName('ql-image-link');
        if(imageLinkBtns) {
            [].slice.call(imageLinkBtns).forEach((item) => {
                item.innerHTML = `
                    <span
                        style="
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 14px;">
                        图
                    </span>
                `;
            });
        };
    }
}

Quill.register({
    'modules/toolbar_image_link': ToolbarImageLink
}, true);

export default ToolbarImageLink;
