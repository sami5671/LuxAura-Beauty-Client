# CODE LIVE SITE LINK: 
## https://luxaura-beauty-client.web.app/

# SignUp:
This registration system, powered by Firebase, employs React with Tailwind CSS for an engaging interface. Users input their name, email, and password, with real-time password validation for security. Firebase's createUser function facilitates account creation, triggering success alerts. Background images enhance the visual appeal. Upon successful registration, users receive a confirmation and are redirected to the login page. Error messages prompt users to address issues. The system promotes a seamless user experience, encouraging navigation between registration and login processes while maintaining a sleek and responsive design.
# Login: 
This login system utilizes Firebase for authentication. It employs React for the front end, featuring dynamic styles with Tailwind CSS. The background is set using a captivating image, and form inputs for email and password facilitate user login. Firebase functions handle user authentication, supporting both email/password and social logins via Google and GitHub. Upon successful login, users are greeted with a sweet alert and redirected to their intended destination. Any login errors prompt corresponding alerts. The system ensures a seamless user experience, offering registration options and an intuitive design. Firebase's robust authentication capabilities enhance the security and reliability of the login process.
# Back-End Technology(MongoDb, ExoressJS)
This backend system utilizes Express.js and MongoDB to create a robust server for a product management application. Express.js facilitates routing and middleware implementation, while MongoDB serves as the database. The server connects to MongoDB using the MongoDB Node.js driver, establishing collections for products, brands, and user carts. Endpoints are defined for CRUD operations on products and brands, allowing data to be created, retrieved, updated, and deleted. The server also handles user cart operations, enabling the addition, retrieval, and deletion of items. The MongoDB ObjectId is used for precise identification of documents. The system employs async/await functions to handle asynchronous operations, ensuring smooth execution. The server confirms successful MongoDB connection with a ping command. Overall, this backend system offers a scalable and efficient solution for managing product and brand information with seamless integration between Express.js and MongoDB.

## 1. Add Product: 
The "AddProduct" component serves as a form for users to input details of a new product. It leverages React for dynamic rendering and integrates SweetAlert2 for user-friendly notifications. The form collects information such as image URL, product name, brand, type, price, description, and rating. Upon submission, the data is sent to the server using a fetch request to a specified endpoint. The background style is visually enhanced with a responsive layout. Overall, the component provides a seamless and visually appealing interface for adding products to the system.
## 2. BrandProductCard: 
The "BrandProductCard" component renders a card-style display for a specific product, receiving product details as props. It showcases the product's image, name, brand, type, price, and rating in a visually appealing layout. The card includes links to view more details and update the product information, leading to specific routes based on the product's ID. Utilizing Tailwind CSS for styling, the component enhances the user experience by presenting essential product information in a clean and structured manner, facilitating navigation to detailed views or update functionalities.
## 3. BrandProductDetails:
"BrandProductDetails" is a React component displaying detailed information about a specific product. It retrieves product data using the useLoaderData hook from the React Router. The component presents the product's image, name, brand, price, and description in a visually appealing layout. Users can add the product to their cart with a button, triggering a POST request to the server. Utilizing SweetAlert2, users receive a success notification upon successfully adding the product to their cart. The responsive design enhances the user experience, making it easy to view and interact with product details.

## 4. BrandProductUpdate:
"BrandProductUpdate" is a React component designed for updating existing product details. Utilizing the useLoaderData hook, it fetches the current product's data for pre-filling the update form. Users can modify product information such as image URL, name, brand, type, price, description, and rating. Upon form submission, the component sends a PUT request to the server, updating the product in the database. SweetAlert2 provides a success notification if the update is successful. The responsive design ensures an optimal user experience, facilitating the seamless modification of product details in a visually appealing manner.
## 5. MyCart: 
"MyCart" is a React component displaying a user's shopping cart. It uses the useLoaderData hook to fetch cart data. The component dynamically updates the cart count and renders individual items using "MyCartCard" components. Users can view and manage items in their cart, providing a streamlined and responsive shopping experience.
## 6. MyCartCard: 
"MyCartCard" is a React component rendering a card for a product in the shopping cart. It displays product details like name, brand, and price, along with an option to delete the item. The component uses the SweetAlert2 library for a confirmation prompt before deleting, providing a user-friendly interface for managing cart items.








