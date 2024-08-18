import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

function PhotoId({ params: { id, photoid } }: Props) {
  return (
    <div>
      Photo Id of user {id} is {photoid}
    </div>
  );
}

export default PhotoId;
