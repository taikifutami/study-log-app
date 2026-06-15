import { useState } from 'react';
import './App.css';

function App() {
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState('');
  const [logs, setLogs] = useState([]);

  const addLog = () => {
    if (!subject || !hours) return;

    const newLog = {
      subject,
      hours: Number(hours),
    };

    setLogs([...logs, newLog]);

    setSubject('');
    setHours('');
  };

  const deleteLog = (index) => {
    const newLogs = logs.filter((_, i) => i !== index);

    setLogs(newLogs);
  };

  const totalHours = logs.reduce((sum, log) => sum + log.hours, 0);
  console.log('logs=', logs);
  console.log('totalHours=', totalHours);
  return (
    <div className="container">
      <h1>学習ログ管理アプリ</h1>

      <input
        type="text"
        placeholder="学習内容"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="number"
        placeholder="学習時間"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <button onClick={addLog}>追加</button>

      <h2>学習履歴</h2>

      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            {log.subject} ： {log.hours}時間
            <button className="delete-btn" onClick={() => deleteLog(index)}>
              削除
            </button>
          </li>
        ))}
      </ul>

      <h2>合計学習時間：{totalHours}時間</h2>
    </div>
  );
}

export default App;
