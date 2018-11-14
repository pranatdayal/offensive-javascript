// log.php
<?php

// take advantage of error_log to log the message to the file console.log
@error_log($_POST['log'] . "
", 3, 'console.log');

?>;
