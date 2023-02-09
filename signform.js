const SignUpForm = ()=>{
    const [state,setState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
}
return (
    <form>
        <label>first Name</label>
        <input 
        name={"firstName"} 
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeHolder={"Email"}
        />
        <button type="submit">submit</button>

    </form>
)