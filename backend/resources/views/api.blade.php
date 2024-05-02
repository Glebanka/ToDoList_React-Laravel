<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('bootstrap.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Tasks</title>
</head>
<body class="d-flex flex-column gap-3">
    <h1>Tasks</h1>
    @foreach($tasks as $task)
    <ul>
            <li>{{ $task->title }}</li>
            <li>{{ $task->description }}</li>
          </ul>
    @endforeach
</body>
</html>
