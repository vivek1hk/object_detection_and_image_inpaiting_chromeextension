from django.conf.urls import url
from inpainter import views

urlpatterns = [
    url(r'^$', views.home_page_view,name="home_page_view"),
    url(r'^index/',views.index_views,name="index_views"),
]