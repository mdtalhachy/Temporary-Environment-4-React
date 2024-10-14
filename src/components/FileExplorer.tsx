const FileExplorer: React.FC<{
  handleFileClick: (fileName: string) => void;
}> = ({ handleFileClick }) => {
  const { files, selectedFile, setShowExplorer } = useVSCodeStore();
  return (
    <Resizable axis="x" initial={250} min={200} max={400}>
      {({ position, separatorProps }) => (
        <div className="flex h-full">
          <div className="bg-gray-800 h-full" style={{ width: position }}>
            <div className="flex justify-between items-center p-2 border-b border-gray-700">
              <h2 className="text-sm font-bold">Explorer</h2>
              <X
                size={18}
                className="cursor-pointer"
                onClick={() => setShowExplorer(false)}
              />
            </div>
            <div className="p-2">
              {Object.keys(files).map((fileName) => (
                <div
                  key={fileName}
                  className={`flex items-center cursor-pointer hover:bg-gray-700 p-1 ${
                    fileName === selectedFile ? 'bg-gray-700' : 'bg-transparent'
                  }`}
                  onClick={() => handleFileClick(fileName)}
                >
                  <File size={16} className="mr-2" />
                  <span>{fileName}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            {...separatorProps}
            className="w-1 bg-gray-600 cursor-col-resize"
          />
        </div>
      )}
    </Resizable>
  );
};

export default FileExplorer;