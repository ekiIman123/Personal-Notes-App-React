import React from "react";
import ContentTitle from "./ContentTitle";
import ContentDate from "./ContentDate";
import ContentBody from "./ContentBody";

function ItemContent({ title, date, body }) {
  return (
    <div className="note-item__content">
      <ContentTitle title={title} />
      <ContentDate date={date} />
      <ContentBody body={body} />
    </div>
  );
}

export default ItemContent;
