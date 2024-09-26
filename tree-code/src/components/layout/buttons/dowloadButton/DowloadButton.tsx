export default function DowloadButton() {
    const handleDownload = () => {
        const fileUrl = '/path/to/your/file.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'arquivo.pdf';
        link.click();
    };

    return (
        <button onClick={handleDownload}>
            Baixar Arquivo
        </button>
    );
}