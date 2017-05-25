//
//    index.html (3rd party webpage)
//          <div data-ps-component="MyNewFancyComponent" />
//
//    loadersIndex.js
//           const loadersIndex = [
//             {
//                name: 'MyNewFancyComponent'
//                importPath: 'path/to/widget'
//             }
//             ...
//           ]

const loadersIndex = [
    { name: 'wid', importPath: 'widgets/wid' },
    { name: 'sample', importPath: 'stateful/sample' },
    { name: 'App', importPath: 'widgets/SomePage/index' },
    { name: 'Topic', importPath: 'widgets/SomePage/Topic' },
    { name: 'Home', importPath: 'widgets/SomePage/Home' },
    { name: 'About', importPath: 'widgets/SomePage/About' },
    { name: 'Nav', importPath: 'widgets/Nav/Nav' }
]


export default loadersIndex;
