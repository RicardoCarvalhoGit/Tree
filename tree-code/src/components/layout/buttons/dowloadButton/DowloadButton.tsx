import styles from "./DowloadButton.module.css"

export default function DowloadButton() {
    const handleDownload = () => {
        const fileUrl = '/assets/docs/edital.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'edital.pdf';
        link.click();
    };

    return (
        <button onClick={handleDownload} className={styles.dowloadButton}>
            Baixar Arquivo
        </button>
    );
}