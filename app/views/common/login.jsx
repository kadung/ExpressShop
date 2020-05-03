const React = require('react');

const Login = (props) => {
  return (
        <>
            <head>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>

                {props.isAdmin && <script src="/javascripts/admin.js"/>}
                <link rel="stylesheet" href="/stylesheets/login.css" />
                
                <title>Kadung</title>
                <link rel="icon" href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png" type="image/x-icon" /> 
            </head>
            <body class="text-center">
                <form class="form-signin" id="loginForm">
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label class="sr-only">User name:</label>
                    <input type="text" name="username" class="form-control" placeholder="Username" required="" autoFocus=""/>
                    <label class="sr-only">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Password" required=""/>
                    <div class="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </body>
      </>   
  )
}

export default Login;