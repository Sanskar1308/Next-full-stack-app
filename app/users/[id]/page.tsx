import React from "react";

interface Props {
  params: { id: number };
}

function UserDetailPage({ params: { id } }: Props) {
  return <div>User details page {id}</div>;
}

export default UserDetailPage;
