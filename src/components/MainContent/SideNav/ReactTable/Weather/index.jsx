import React, { useEffect, useState } from 'react';
import './index.css';

function WeatherData() {
  const [temperature, setTemperature] = useState(null);
  const [feelLike, setFeelLike] = useState(null);
  const [temp_Max, setTemp_Max] = useState(null);
  const [temp_Min, setTemp_Min] = useState(null);
  const apiKey = 'e57f7ff111eb6b146ede4604be4d12b0';
  const [choceLocation, setChoceLocation] = useState('Taipei');
  const [cityName, setCityName] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 加载状态

  useEffect(() => {
    setIsLoading(true); // 在发起请求时设置加载状态为 true

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${choceLocation},TW&units=metric&lang=zh_tw&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTemperature(data.main.temp);
        setFeelLike(data.main.feels_like);
        setTemp_Max(data.main.temp_max);
        setTemp_Min(data.main.temp_min);

        setWeatherIcon(data.weather[0].icon);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false); // 请求完成后设置加载状态为 false
      });
  }, [choceLocation]);

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setChoceLocation(selectedLocation);

    // 查找选中选项的文本
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    setCityName(selectedOption.text);
  };

  const getWeatherIconUrl = () => {
    if (weatherIcon) {
      return `https://openweathermap.org/img/w/${weatherIcon}.png`;
    }
    return '';
  };

  return (
    <div className='weatherStyle'>
      <div className='base'>
        <h1>你想查詢哪裏?</h1>
        <select name="" id="choceLocation" className='choceLocation' onChange={handleLocationChange} value={choceLocation}>
        <option value="Taipei">台北市</option>
        <option value="Keelung">基隆市</option>
        <option value="Taoyuan">桃園市</option>
        <option value="Hsinchiu">新竹市</option>
        <option value="Miaoli">苗栗縣</option>
        <option value="Nantou">南投縣</option>
        <option value="Taichung">台中市</option>
        <option value="Chanhua">彰化縣</option>
        <option value="Yunlin">雲林縣</option>
        <option value="Chiayi">嘉義市</option>
        <option value="Tainan">台南市</option>
        <option value="Kaohsiung">高雄市</option>
        <option value="Pingtung">屏東縣</option>

        <option value="Yilan">宜蘭縣</option>
        <option value="Hualien">花蓮縣</option>
        <option value="Taitung">台東縣</option>
        <option value="Penghu">澎湖縣</option>
        <option value="Kinmen">金門縣</option>
        <option value="Lienchiang">連江縣</option>
        </select>
        <div className='cityName'>
          {cityName !== null ? <div> {cityName}</div> : null}
        </div>
        {isLoading ? ( // 根据加载状态显示不同的内容
          <div>Loading...</div>
        ) : (
          <ul>
            {temperature !== null && <li>溫度: {temperature} 度</li>}
            {feelLike !== null && <li>體感: {feelLike} 度</li>}
            {temp_Max !== null && <li>最高: {temp_Max} 度</li>}
            {temp_Min !== null && <li>最低: {temp_Min} 度</li>}
            {weatherIcon !== null && <img src={getWeatherIconUrl()} alt="Weather Icon" />}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WeatherData;
