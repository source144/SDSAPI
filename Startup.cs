using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Mvc.Routing;
using VueCliMiddleware;

namespace SDSAPI
{
   public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // NO DARN CORS
      services.AddCors(c =>
      {
        c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
      });

      // JSON Serializer
      services.AddControllersWithViews(o => o.UseGeneralRoutePrefix("api"))
        .AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
        .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
      services.AddControllers();
      services.AddSpaStaticFiles(configuration =>
      {
        configuration.RootPath = "ClientApp/dist";
      });

      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "SDSAPI", Version = "v1" });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      // NO DARN CORS
      app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SDSAPI v1"));
      }

      app.UseHttpsRedirection();

      // Vue Build Files
      app.UseStaticFiles();
      if (!env.IsDevelopment())
      {
        app.UseSpaStaticFiles();
      }

      app.UseRouting();

      app.UseAuthorization();

      app.UsePathBase(new Microsoft.AspNetCore.Http.PathString("/api"));

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
        //// Routing magic: Pass route to client app
        //endpoints.MapFallbackToFile("index.html");
      });


      app.UseSpa(spa =>
      {
        // To learn more about options for serving an Angular SPA from ASP.NET Core,
        // see https://go.microsoft.com/fwlink/?linkid=864501

        spa.Options.SourcePath = "ClientApp";

        if (env.IsDevelopment())
        {

          // run npm process with client app
          //if (mode == "start")
          //{
            spa.UseVueCli(npmScript: "serve", port: 8080, forceKill: true, https: false);
          //}

          // if you just prefer to proxy requests from client app, use proxy to SPA dev server instead,
          // app should be already running before starting a .NET client:
          // run npm process with client app
          //if (mode == "attach")
          //{
          //  spa.UseProxyToSpaDevelopmentServer($"{(https ? "https" : "http")}://localhost:{port}"); // your Vue app port
          //}
        }
      });



    }
  }


  public static class MvcOptionsExtensions
  {
    public static void UseGeneralRoutePrefix(this MvcOptions opts, IRouteTemplateProvider routeAttribute)
    {
      opts.Conventions.Add(new RoutePrefixConvention(routeAttribute));
    }

    public static void UseGeneralRoutePrefix(this MvcOptions opts, string
    prefix)
    {
      opts.UseGeneralRoutePrefix(new RouteAttribute(prefix));
    }
  }

  public class RoutePrefixConvention : IApplicationModelConvention
  {
    private readonly AttributeRouteModel _routePrefix;

    public RoutePrefixConvention(IRouteTemplateProvider route)
    {
      _routePrefix = new AttributeRouteModel(route);
    }

    public void Apply(ApplicationModel application)
    {
      foreach (var selector in application.Controllers.SelectMany(c => c.Selectors))
      {
        if (selector.AttributeRouteModel != null)
        {
          selector.AttributeRouteModel = AttributeRouteModel.CombineAttributeRouteModel(_routePrefix, selector.AttributeRouteModel);
        }
        else
        {
          selector.AttributeRouteModel = _routePrefix;
        }
      }
    }
  }
}
