// "name" references the name you want the Widget to be loadable with in a webpage, eg
//
//    index.html (3rd party webpage)
//          <div data-ps-component="MyNewFancyComponent" />
//
//    loadersIndex.js
//           const loadersIndex = [
//             {
//                name: 'MyNewFancyComponent'
//                importFn: () => (import('path/to/widget'))
//             }
//             ...
//           ]


// few notes on why we're using import('path/to/component') instead of just using a the string "path/to/component"
// and doing the import cmd elswhere.
// if we import elsewhere but keep the path here then we would have to do something like this import("../../" + path)
// which works but comes with the following issues
//    * webpack creates a bundle for every file in "../../" and it's subdirectories, including test files.
//    * if it loads test files then the test file will try and load test dependencies which aren't available when
//      the app is running in browser so the dev build will fail
//    * there's potential to get around this with require.context but that's not really recommended practice
//        https://github.com/facebookincubator/create-react-app/issues/517#issuecomment-243430577
//    * also, as our app grows using the "../../" + path may slow dev builds as others have found because webpack
//      creates a bundle for every file it finds
//    * we could move the test files to a different location but I think there's a great benefit in having unit test
//      files located with it's class so it would be good if we can avoid this approach
//    * an alternative is to eject again and configure webpack to ignore test files when creating bundles but I think we
//      should leave that as our last option as we do gain the benefit of future stack improvements from
//      create-react-app team

const loadersIndex = [
    {name: 'yep', importFn: () => (import('../../widgets/yep'))},
    { name: 'App', importFn: () => (import('../../widgets/SomePage/index'))},
    { name: 'Topic', importFn: () => (import('../../widgets/SomePage/Topic'))},
    { name: 'Home', importFn: () => (import('../../widgets/SomePage/Home'))},
    { name: 'About', importFn: () => (import('../../widgets/SomePage/About'))},
    { name: 'Nav', importFn: () => (import('../../widgets/Nav/Nav'))}
]

export default loadersIndex;