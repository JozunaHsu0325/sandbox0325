import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import './index.css';


export default function News() {
  const apiKey = 'c9a64e5caa2b4ea88e7ce0a61415e71c';
  const apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}&pageSize=3`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const handleArticleClick=(article)=>{
    setSelectedArticle(article);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result.articles); // 更新数据状态，假设API响应包含"articles"字段
        setIsLoading(false); // 数据加载完成后设置isLoading为false
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // 处理错误后也设置isLoading为false
      }
    };

    fetchData();
  }, []); // 传递一个空数组以确保只在组件挂载时执行一次


  return (
    <div>
      {isLoading ? (
        <div className='titleTable'>Loading...</div>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div className='titleTable' >
              <Link to={`article/${encodeURIComponent(item.title)}/${encodeURIComponent(item.content)}/${encodeURIComponent(item.urlToImage)}`} 
              onClick={() => handleArticleClick(item)}>{item.title}</Link>
              </div>
            </li>
          ))}
        </ul>
        
      )}
      <div className='dataTable'><Outlet/></div>


    </div>
  );
}
