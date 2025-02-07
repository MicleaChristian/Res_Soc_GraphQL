import { useState } from "react";
import { Post } from "src/types";

const AddFeed = () => {
  const [error, setError] = useState<string>("");
  const [feed, setFeed] = useState<Post>();
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    zipcode: "",
    NumberStreet: "",
    address: "",
    city: "",
    country: "",
    companyCode: "",
    companylegalForm: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    CustomerOrBusiness: "",
    addressComplement: "",
    homeType: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // } else {
    //   try {
    //     e.preventDefault();
    //     await User.registerRequest(formData);
    //     navigate("/login");
    //   } catch (err) {
    //     console.error("Erreur lors de l'inscription :", err);
    //     alert("Erreur lors de l'inscription. Veuillez vérifier vos informations et réessayer.");
    //   }
    // }
    // set_Validated(true);
    e.preventDefault();
    console.log(e);
    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation createPost($content: String!) {
              createPost(content: $content) {
                message
                success
              }
            }
          `,
          variables: { content: feed?.content },
        }),
      });

      const result = await response.json();
      const data = result.data.addFeed;

      if (data.success) {
        // redirect to feeds page
        window.location.href = "/";
      } else {
        setError(data.message || "Failed to add feed.");
      }
    } catch (err) {
      setError("An error occurred while adding feed.");
    }
  };

  return (
    <div className="add-feed">
      <h1>Add Feed</h1>
      {error && <p className="error-message">{error}</p>}

      {/* modal form add feed */}
      <form onSubmit={handleSubmit}>
        <input type="text"/>
        <textarea
          placeholder="What's on your mind?"
          value={feed?.content}
          onChange={() => setFeed(feed)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddFeed;
