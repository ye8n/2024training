function Ex3() {
  // js의 영역
  const titleStyle = {
    // 키 : 값
    width : 200,
    backgroundColor : 'orange',
    padding: '5px 10px',
    color: '#fff',
    textAlign: 'center'
  }
  const word = '스타일';
  return (
    <>
    {/* JSX의 영역 */}
      <h2>{word} 적용 1</h2>
      {/* css 스타일의 적용은 JS 방식으로 적용 */}
      {/* JSX에서의 JS 적용은 {{}}로 작성 */}
      <h3 style={{ color: 'tomato', backgroundColor: '#ddd' }}>{word} 직접 적용</h3>
      <h3 style={titleStyle}>{word} 변수로 적용</h3>
    </>
  );
}

export default Ex3;