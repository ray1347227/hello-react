import React, { useState, useEffect } from 'react';
// import useDateTime from './diyHook';

// css
const styles = {
  wrapper: {
    textAlign: 'center',
  },
  title: {
    width: 200,
    margin: '0 auto',
    textAlign: 'center',
  },
  minus: {
    margin: '0 10px',
  },
};

// component
function Hook() {
  /*
    useState 方法返回一个数组:
    第一个值表示表示当前状态（初始值为useState中的参数）
    第二个值为修改当前状态的方法，参数即为你要修改成的值
  */
  // count：当前count变量的状态(值)，setCount：用来更新count的方法
  const [count, setCount] = useState(666);
  // console.log(useState(666));
  const [second, setSecond] = useState(new Date().getSeconds());
  // const myTime = useDateTime();

  /*
    useEffect 具有class组件中componentDidMount、didUpdate、willUnmount 三个生命周期的作用
  */
  useEffect(() => {
    document.title = `当前count值是：${count}`;
    console.log(count, 'didMount or didUpdate');
    return () => {
      console.log(count, 'rendered or unmount'); // 组件卸载或者重新渲染执行此Hook时执行,首次不会执行
    };
  });
  console.log(count, 'rendering');

  return (
    <div style={styles.wrapper}>
      <p>count：{count}</p>
      <p>second：{second}</p>
      {/* <p>time: {myTime}</p> */}
      <div>
        <button onClick={() => setCount(count + 1)}>plus(+)</button>
        <button onClick={() => setCount(count - 1)} style={styles.minus}>minus(-)</button>
        <button onClick={() => setSecond(new Date().getSeconds())}>get current second</button>
      </div>
    </div>
  );
}

export default Hook;