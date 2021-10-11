const AdminForm = () => {
  const submitArticle = () => {
    console.log("submit");
    
  };

  return (
    <div className="form">
      <form id="form-articles" className="admin">
        <input type="text" name="title" id="formTitle" placeholder="Title" />
        <input
          type="text"
          name="description"
          id="formDescription"
          placeholder="Description"
        />
        <input type="text" name="text" id="formText" placeholder="Text" />
        <input
          type="text"
          name="coutry"
          id="formCountry"
          placeholder="Country"
        />
        <input type="text" name="city" id="formCity" placeholder="City" />
        <button onClick={submitArticle} id="form-articles-submit"></button>
      </form>
    </div>
  );
};

export default AdminForm;
