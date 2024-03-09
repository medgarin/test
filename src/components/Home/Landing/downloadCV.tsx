import { Button } from "@material-ui/core";

const cv = "http://localhost:3030/CV.pdf";

export function DownloadFile() {
  const file = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <Button
        onClick={() => {
          file(cv);
        }}
        variant="contained"
        size="large"
        color="secondary"
        style={{ marginRight: 40 }}>
        Descargar CV
      </Button>
    </div>
  );
}
