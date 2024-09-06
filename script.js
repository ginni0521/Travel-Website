
        function validateForm() {
            // Get form values
            var name = document.forms["myForm"]["name"].value;
            var email = document.forms["myForm"]["email"].value;
            
            // Validate name
            if (name == "") {
                alert("Name must be filled out");
                return false;
            }

            // Validate email
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (email == "") {
                alert("Email must be filled out");
                return false;
            } else if (!emailPattern.test(email)) {
                alert("Please enter a valid email address");
                return false;
            }

            // If all is good
            return true;
        }
    

