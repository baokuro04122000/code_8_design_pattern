"use strict";
class HtmlTag {
    setTagBody(tagBody) {
        throw Error("Current operation is not support for this object");
    }
    addChildTag(htmlTag) {
        throw Error("Current operation is not support for this object");
    }
    removeChildTag(htmlTag) {
        throw Error("Current operation is not support for this object");
    }
    getChildren() {
        throw Error("Current operation is not support for this object");
    }
}
class HtmlParentElement extends HtmlTag {
    constructor(tagName) {
        super();
        this.tagName = tagName;
        this.startTag = "";
        this.endTag = "";
        this.childrenTag = [];
    }
    getTagName() {
        return this.tagName;
    }
    setStartTag(tag) {
        this.startTag = tag;
    }
    setEndTag(tag) {
        this.endTag = tag;
    }
    addChildTag(htmlTag) {
        this.childrenTag.push(htmlTag);
    }
    removeChildTag(htmlTag) {
        this.childrenTag.filter(item => item == htmlTag);
    }
    getChildren() {
        return this.childrenTag;
    }
    generateHtml() {
        console.log(this.startTag);
        this.childrenTag.forEach(tag => {
            tag.generateHtml();
        });
        console.log(this.endTag);
    }
}
class HtmlElement extends HtmlTag {
    constructor(tagName) {
        super();
        this.tagName = tagName;
        this.tagBody = "";
        this.startTag = "";
        this.endTag = "";
    }
    getTagName() {
        return this.tagName;
    }
    setStartTag(tag) {
        this.startTag = tag;
    }
    setEndTag(tag) {
        this.endTag = tag;
    }
    setTagBody(tagBody) {
        this.tagBody = tagBody;
    }
    generateHtml() {
        console.log(this.startTag + "" + this.tagBody + "" + this.endTag);
    }
}
const parentTag = new HtmlParentElement("<html>");
parentTag.setStartTag("<html>");
parentTag.setEndTag("</html>");
const p1 = new HtmlParentElement("<body>");
p1.setStartTag("<body>");
p1.setEndTag("</body>");
parentTag.addChildTag(p1);
let child1 = new HtmlElement("<p>");
child1.setStartTag("<p>");
child1.setEndTag("</p>");
child1.setTagBody("Testing html tag library");
p1.addChildTag(child1);
child1 = new HtmlElement("<p>");
child1.setStartTag("<p>");
child1.setEndTag("</p>");
child1.setTagBody("Paragraph 2");
p1.addChildTag(child1);
parentTag.generateHtml();
