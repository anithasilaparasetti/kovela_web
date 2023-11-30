import MarkdownIt from 'markdown-it';
import { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const AntdMarkdownInput = ({ value, onChange }) => {
  const [t, setT] = useState('');

  const mdParser = new MarkdownIt();

  const handleEditorChange = ({ text }) => {
    setT(text);
    console.log(text);
  };

  return (
    <div>
      <MdEditor value={value} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
    </div>
  );
};

export default AntdMarkdownInput;
