<?php
    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
    function my_mailer($recipientAddress,$passwordX,$smtpConfig){ 
        // Import PHPMailer classes into the global namespace
        require 'PHPMailer/Exception.php';
	    require 'PHPMailer/PHPMailer.php';
	    require 'PHPMailer/SMTP.php';
        // Replace sender@example.com with your "From" address.
        // This address must be verified with Amazon SES.
        $sender = "no-reply@digitadooh.com";
        $senderName = "Digit-AD";

        // Replace recipient@example.com with a "To" address. If your account
        // is still in the sandbox, this address must be verified.
        $recipient = $recipientAddress;

        // Replace smtp_username with your Amazon SES SMTP user name.
        $usernameSmtp =$smtpConfig['username'];

        // Replace smtp_password with your Amazon SES SMTP password.
        $passwordSmtp =$smtpConfig['password'];

        // Specify a configuration set. If you do not want to use a configuration
        // set, comment or remove the next line.
       // $configurationSet = 'ConfigSet';

        // If you're using Amazon SES in a region other than US West (Oregon),
        // replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
        // endpoint in the appropriate region.
        $host =$smtpConfig['host'];
        $port = 587;

        // The subject line of the email
        $subject = 'Sign Up Comfirmation';

        // The plain-text body of the email
        $bodyText =  "This email was sent with respect to your sign up on Digit-AD";

        // The HTML-formatted body of the email
        $userId=$passwordX."-".$recipientAddress;
        $bodyHtml = "<h1>Sign Up confirmation</h1>
            <p>
            Thanks for registering on Digit-Ad click the link below to confirm your email address

            <a href='http://digitad.us-east-2.elasticbeanstalk.com/register/confirmation.php?id=$userId'>CONFIRM SIGN UP</a></p>";

        $mail = new PHPMailer(true);

        try {
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;  
            // Specify the SMTP settings.
            $mail->isSMTP();
            $mail->setFrom($sender, $senderName);
            $mail->Username   = $usernameSmtp;
            $mail->Password   = $passwordSmtp;
            $mail->Host       = $host;
            $mail->Port       = $port;
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = 'tls';
            //$mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

            // Specify the message recipients.
            $mail->addAddress($recipient);
            // You can also add CC, BCC, and additional To recipients here.

            // Specify the content of the message.
            $mail->isHTML(true);
            $mail->Subject    = $subject;
            $mail->Body       = $bodyHtml;
            $mail->AltBody    = $bodyText;
            if( $mail->Send()){
                echo 1;
            }
        } catch (phpmailerException $e) {
            echo "An error occurred. {$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
        } catch (Exception $e) {
            echo "Email not sent. {$mail->ErrorInfo}", PHP_EOL; //Catch errors from Amazon SES.
        }
    }
?>