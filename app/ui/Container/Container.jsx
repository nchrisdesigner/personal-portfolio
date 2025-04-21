const Container = ({children, comment = ''}) => {
  return (
    <section className='section padding relative' >
      {/* <p className={`${indie.className} absolute top-8 left-8`}>{comment}</p> */}
      {/* <p> &lt;!-- {comment} --&gt; </p> */}
      {children}
    </section>
  )
}

export default Container