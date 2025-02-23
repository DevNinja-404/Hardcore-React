### React 19 now includes its own compiler,which will not only speed up the performance but also automate certain tedious tasks,reducing the workload for developers.

### with React-19's new compiler ,there's no need for memorization the process of optimizing components to prevent unnecessary re-renders.Previously,we relied on hooks like "useMemo()" and "useCallback()" for this purpose,but these will now become obsolete.

### We no longer need to install third-party packages for SEO and metadata because React 19 now offers built-in support for these features.We can place the tags anywhere within the component and it will work for both client and server.

### DIRECTIVES :

- React 19 now includes built-in support for use client and use server directives.
- This allows components to be rendered on the server,resulting in improved SEO,faster page load times,and more straight

### Things which are completely obsolete in react 19

- forwardRef
- React.lazy
- useContext
- memo
- useEffect - we will be using useEffect for sideEffects but not for data fetching.
- useCallback
