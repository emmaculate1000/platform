<?php
    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
    function my_mailer($recipientAddress,$smtpConfig){ 
        // Import PHPMailer classes into the global namespace
        require 'PHPMailer/Exception.php';
	    require 'PHPMailer/PHPMailer.php';
	    require 'PHPMailer/SMTP.php';
        // Replace sender@example.com with your "From" address.
        // This address must be verified with Amazon SES.
        $sender = "noreply@digitadooh.tech";
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
        $subject = 'Successfully Launched Campaign:Digit-AD';

        // The plain-text body of the email
        $bodyText =  "";
        $bodyHtml = "<h1>Campaign Received</h1>
            <div>
                <p>           
                    You've successfully launched a campaign in Digit-AD , your campaign is being  reviewed thanks
                </p>
                <div style='margin:20px 0px;width:100%;'>
                    <a href='https://app.digitadooh.com/login' style='text-decoration:none;width:90%;margin:20px 5%;padding:10px;color:white;background-color:#e36f21'>OPEN DASHBOARD</a>
                </div>
            </div>
            ";

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