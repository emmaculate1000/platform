<?php
    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
    function my_mailer($recipientAddress){ 
        // Import PHPMailer classes into the global namespace
        require 'PHPMailer/Exception.php';
	    require 'PHPMailer/PHPMailer.php';
	    require 'PHPMailer/SMTP.php';
        // Replace sender@example.com with your "From" address.
        // This address must be verified with Amazon SES.
        $sender = " noreply@digitadooh.com";
        $senderName = "Digit-Ad";

        // Replace recipient@example.com with a "To" address. If your account
        // is still in the sandbox, this address must be verified.
        $recipient = $recipientAddress;

        // Replace smtp_username with your Amazon SES SMTP user name.
        $usernameSmtp = 'AKIAVGKKEX76ZXS6Q24I';

        // Replace smtp_password with your Amazon SES SMTP password.
        $passwordSmtp = 'BPclDev9aF1tcl2MXzND2DxHrjzLY5ufgTjz/BIRAHi9';

        // Specify a configuration set. If you do not want to use a configuration
        // set, comment or remove the next line.
        $configurationSet = 'ConfigSet';

        // If you're using Amazon SES in a region other than US West (Oregon),
        // replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
        // endpoint in the appropriate region.
        $host = 'email-smtp.us-east-1.amazonaws.com';
        $port = 465;

        // The subject line of the email
        $subject = 'Sign Up Comfirmation';

        // The plain-text body of the email
        $bodyText =  "Email Test\r\nThis email was sent through the
            Amazon SES SMTP interface using the PHPMailer class.";

        // The HTML-formatted body of the email
        $bodyHtml = '<h1>Email Test</h1>
            <p>This email was sent through the
            <a href="https://aws.amazon.com/ses">Amazon SES</a> SMTP
            interface using the <a href="https://github.com/PHPMailer/PHPMailer">
            PHPMailer</a> class.</p>';

        $mail = new PHPMailer(true);

        try {
            // Specify the SMTP settings.
            $mail->isSMTP();
            $mail->setFrom($sender, $senderName);
            $mail->Username   = $usernameSmtp;
            $mail->Password   = $passwordSmtp;
            $mail->Host       = $host;
            $mail->Port       = $port;
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = 'tls';
            $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

            // Specify the message recipients.
            $mail->addAddress($recipient);
            // You can also add CC, BCC, and additional To recipients here.

            // Specify the content of the message.
            $mail->isHTML(true);
            $mail->Subject    = $subject;
            $mail->Body       = $bodyHtml;
            $mail->AltBody    = $bodyText;
            $mail->Send();
            echo "Email sent!" , PHP_EOL;
        } catch (phpmailerException $e) {
            echo "An error occurred. {$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
        } catch (Exception $e) {
            echo "Email not sent. {$mail->ErrorInfo}", PHP_EOL; //Catch errors from Amazon SES.
        }
    }
?>