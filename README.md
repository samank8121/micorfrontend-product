## Description  

This is a sample application with sub-projects following a microfrontend architecture, built using React and Webpack. The key projects include:  

- **store**:  
  - Uses Redux for state management shared across `products` and `main-app`.  

- **components**:  
  - Contains common components shared across `products` and `main-app`.
  - Uses Sass for styling.  

- **products**:  
  - Includes product-specific components.  
  - Uses Sass for styling.  

- **main-app**:  
  - Serves as the portal that integrates and renders `products`, `components`, and `store`.  

## Project Setup

# Install Dependencies
Run the following command in both the client and server directories:

```bash
$ pnpm install
```

## Running the Project
Each subproject should be started separately. Start them in the following order:

1. components
2. store
3. product
4. main-app (start this last)

```bash
# development
$ pnpm run start
```

## Author
[Saman Kefayatpour](https://www.linkedin.com/in/samankefayatpour/)