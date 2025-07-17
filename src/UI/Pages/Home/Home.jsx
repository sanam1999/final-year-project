import { Link } from "react-router-dom";
import './Home.css';
import { HackingToolset } from "../../Constants/Path";

function Home({ type}) {
  return (
    <div className="toolset-wrapper">
      {displayHackingToolset(type)}
    </div>
  );
}

export default Home;

function displayHackingToolset(type) {
  if (type === "All") {
    return (
      <div className="tool-grid">
        {Object.entries(HackingToolset).flatMap(([category, details]) =>
          details.tools.map((tool, index) => (
            <ToolCard tool={tool} key={`${category}-${index}`} />
          ))
        )}
      </div>
    );
  }

  const selected = HackingToolset[type];
  return (
    <>
      <h2 className="category-title">{type}</h2>
      <div className="tool-grid">
        {selected.tools.map((tool, index) => (
          <ToolCard tool={tool} key={index} />
        ))}
      </div>
    </>
  );
}

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <div className="tool-icon">
        <tool.Icon />
      </div>
      <div className="tool-name">{tool.name}</div>
      <div className="tool-desc">{tool.description}</div>
      <Link to={tool.Path} className="tool-button">
        Launch
      </Link>
    </div>
  );
}
