import * as React from "react";

function App({ domElement }) {
  const opportunityID = domElement.getAttribute("opportunity-id");

  const onClick = () => {
    const url = `http://localhost:3000/refer-public/${opportunityID}`;
    var win = window.open(url, "_blank");
    win.focus();
  };

  const styles = {
    margin: "5px",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "12px 16px",
    height: "43px",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "18px",
    color: "white",
    border: "2px solid #ef6c2d",
    backgroundColor: "#ef6c2d",
    marginRight: "8px",
  };

  if (!opportunityID) {
    return <span></span>;
  }

  return (
    <span>
      <div className="referrio-embed">
        <button style={styles} onClick={onClick}>
          Referr.io <span class="icon glyphicon glyphicon-new-window"></span>
        </button>
      </div>
    </span>
  );
}

export default App;
