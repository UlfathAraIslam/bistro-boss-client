/* 
-------BASIC---------
    1. do not show  link to them who should not see it
         only show to the person/types of user who should see it
    2. do not allow to visit the link by typing on the url.
    use adminRoute that will check whether the user is admin or not.
    if not admin then redirect to any other page. you could logout user and send them to the login page as well.

----------To Send Data---------
1. verify jwt token (send authorization token in the header to the server). If possible use axios to send jwt token by intercepting the request.
2. if it is an admin activity, make sure only user is posting data by using verifyAdmin.

3.



*/