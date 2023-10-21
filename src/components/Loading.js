import React from "react";
import ContentLoader from "react-content-loader";

function Loading() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={100}
      viewBox="0 0 400 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="400" height="100" />
    </ContentLoader>
  );
}

export default Loading;
