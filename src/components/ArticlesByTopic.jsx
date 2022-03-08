import { useParams } from "react-router-dom";

export default function ArticlesByTopic () {
    const { topic } = useParams();
    return (
      <div>
        <h2>{topic} articles </h2>
      </div>
    );
};