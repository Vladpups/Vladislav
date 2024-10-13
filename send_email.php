<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !$email) {
        // Обработка ошибки
        http_response_code(400);
        echo "Пожалуйста, заполните все поля корректно.";
        exit;
    }

    // Получатель письма
    $recipient = "your_email@example.com";

    // Тема письма
    $subject = "Новое сообщение от $name";

    // Содержимое письма
    $email_content = "Имя: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Сообщение:\n$message\n";

    // Заголовки письма
    $email_headers = "From: $name <$email>";

    // Отправка письма
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Спасибо! Ваше сообщение отправлено.";
    } else {
        http_response_code(500);
        echo "Произошла ошибка при отправке вашего сообщения.";
    }
} else {
    http_response_code(403);
    echo "Доступ запрещен.";
}
?>
