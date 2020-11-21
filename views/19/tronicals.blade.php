@extends('19.base')
@section('scripts')
@parent
<link rel="stylesheet" type="text/css" media="screen" href="css/home.css" />
@endsection
@section('content')
<style>
a{
  color: white;
  text-decoration: underline;
}
</style>
<section class="main_page_str">
    <div class="_tronicals_cont">
        <div class="_tronicals_pdf">
            Tronicals
            <h3><a href="magazines/Tronicals_1_1.pdf"> Volume 1 Issue 1</a></h3>
            <h3><a href="magazines/Tronicals_1_2.pdf"> Volume 1 Issue 2</a></h3>
            <h3><a href="magazines/Tronicals_2_1.pdf"> Volume 2 Issue 1</a></h3>
            <h3><a href="magazines/Tronicals_3_1.pdf"> Volume 3 Issue 1</a></h3>
            <h3><a href="magazines/Tronicals_3_2.pdf"> Volume 3 Issue 2</a></h3>
            <h3><a href="magazines/Tronicals_4_1.pdf"> Volume 4 Issue 1</a></h3>
        </div>
    </div>
</section>
@endsection