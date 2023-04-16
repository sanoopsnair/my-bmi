
function bmi_score({bmiNo, bmiName}) {
  // console.log(props)
  // this destructuring, avaid 'props.bmiNo' calling
  // const {bmiNo, bmiName} = props;
  return (
    <div>
      BMI score {bmiNo} <br/>
      BMI Type {bmiName}
    </div>
  )
}

export default bmi_score
