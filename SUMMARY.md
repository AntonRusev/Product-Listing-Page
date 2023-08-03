### Technologies

The most notable tools the page was developed with, are ReactJS and SASS. Some other packages and mini-libraries such as uuid(for generating random IDs) and react-slider(for providing a ready-to-go Slider component) were also used. 

The data used by the app is hardcoded and is located in the data.js file.

### The Task

As per the task requirements, the page is designed to resemble an e-commerce store. 

The main elements it consists of, are as follows:

- Header: It consists of the title of the store and a navigation, which dynamically generates all the categories present in the product data file. 

- Product List: Holding Product Cards for all available products in the current chosen category.

- Product Card: It displays the name, picture, short description, ratings(stars + number of reviews), pricing(with the option to have a discount, which will dynamically calculate a new price based on the discount percentage and also show the old price along with the new one) and an "Add to cart" button, which triggers an "Item added to shop cart" alert, when clicked. 

- Filter Products: Consists of price filtering slider(universal for all categories) and dynamically generated color filter(checkbox) options, based on the currently chosen category. 

- Sort Options: Universal sorting options, regardless of which category is chosen. The available options are to sort by name (A-Z and Z-A) and price(from highest to lowest and vice versa).

- Footer: Static section with three(inactive) links in it. 

The page has responsive design with three different styling layouts- mobile(default), tablet(wider than 720px) and desktop(wider than 1220px). Respectively the page shows 5 rows of 1 product each on mobile setting, 5 rows of 2 products on tablet, and 5 rows of 3 products on desktop. Mobile setting also has the Filter element as a toggled drop-down menu and together with the Sort element they take the entire screen, when activated. On tablet and desktop, the Filter element is always visible on the left side of the page. 

### Under the hood

The application uses a global Context in order to provide the components with the required category and product data. This allows some components, such as Filter, Product List and Header(navigation), to dynamically generate some of their content based on the data passed to them. 

For the layout of the page is used the CSS display property "grid". SASS is used for styling the components.

The responsive design is achieved by using ReactJS hooks(and state) and CSS styling. With the help of a custom hook(called useWindowDimensions), depending on the size of the window, different state is set. Based on that state, the Product List shows 5 products for mobile screen, 10 for tablet and 15 for desktop. The rows of Product Cards are always 5, but the products per row change from 1 on the smallest screen, to 2 on the middle-sized one, and finally 3 on desktop layout. 
The other various responsive design customization is achieved with CSS styling and media queries. The starting point for the responsive design is mobile screen. 

### Challenges 

Some of the noteworthy(or rather time-consuming) challenges that I faced when developing this app were, surprisingly, connected to the styling and the CSS behind it.

One of them was positioning of elements with "display:grid" in three different screen sizes. I've used Grid only on very basic level before(my usual go-to is Flexbox), so it took me some time to get used to it in a more complex layout.

Another setback was deciding how to handle the display of Product Cards in order to have only 5 rows in the Products List at any time(and to have the "Load more" button show exactly 5 more rows), regardless of how many products are passed to be shown, depending on the screen size. 

At first I was thinking about trying to do it only with CSS and media queries, but eventually I decided to implement a custom hook and move the logic to the component, where I used state to keep the screen size value and pass params based on it. 