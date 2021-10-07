import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://briamft.github.io/PokedexSvelte/', // Update to point to your repository
        user: {
        name: 'Briam Flores', // update to use your name
        email: 'briam.flores@enkoder.com.mx' // Update to use your email
    },
    
    },
        () => {
        console.log('Deploy Complete!');
    }
);