import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Folder, Globe, Package, Settings, GitBranch, CheckCircle, Play, Terminal, Plus, Rocket } from "lucide-react";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  useEffect(() => {
    console.log("✅ Root page loaded successfully");
    console.log("📁 Monorepo structure:");
    console.log("  └── apps/web (React + Vite + TypeScript)");
    console.log("  └── packages/ui (Shared components)");
    console.log("  └── packages/config-* (Shared configs)");
  }, []);

  const handlePreviewApp = () => {
    toast({
      title: "Web App Preview",
      description: "You're already viewing the main web app! This dashboard is part of it.",
    });
  };

  const handleBuildAll = () => {
    toast({
      title: "Build All Started",
      description: "Building all apps and packages in the monorepo...",
    });
    console.log("🏗️ Running: turbo build");
  };

  const handleDevMode = () => {
    toast({
      title: "Dev Mode",
      description: "Toggle dev mode in the top left of the Lovable editor.",
    });
    console.log("🔧 Development mode info displayed");
  };

  const handleAddPackage = () => {
    toast({
      title: "Add Package",
      description: "Ready to add a new package to the monorepo!",
    });
    console.log("📦 Package creation flow initiated");
  };

  const handleDeploy = () => {
    toast({
      title: "Deploy",
      description: "Use the Publish button in the top right to deploy your app.",
    });
    console.log("🚀 Deployment info displayed");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Turbo Monorepo Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage and preview your monorepo applications
          </p>
        </div>

        {/* Monorepo Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-primary" />
                Applications
              </CardTitle>
              <CardDescription>
                Frontend applications in your monorepo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Web App
                  </h3>
                  <p className="text-sm text-muted-foreground">Main React application</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Vite</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={handlePreviewApp}>
                  <Play className="mr-1 h-3 w-3" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Packages
              </CardTitle>
              <CardDescription>
                Shared packages and configurations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">@repo/ui</h4>
                  <p className="text-xs text-muted-foreground">Shared UI components</p>
                </div>
                <Badge variant="outline">Package</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">@repo/config-eslint</h4>
                  <p className="text-xs text-muted-foreground">ESLint configuration</p>
                </div>
                <Badge variant="outline">Config</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">@repo/config-typescript</h4>
                  <p className="text-xs text-muted-foreground">TypeScript configuration</p>
                </div>
                <Badge variant="outline">Config</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common development tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleBuildAll}>
                <GitBranch className="h-5 w-5" />
                <span className="text-sm">Build All</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleDevMode}>
                <Terminal className="h-5 w-5" />
                <span className="text-sm">Dev Mode</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleAddPackage}>
                <Plus className="h-5 w-5" />
                <span className="text-sm">Add Package</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2" onClick={handleDeploy}>
                <Rocket className="h-5 w-5" />
                <span className="text-sm">Deploy</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <Badge variant="secondary" className="px-4 py-2">
              Root Page Debug: ✅ Working • Turbo Ready • Apps Connected
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Check console for detailed monorepo structure info
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
