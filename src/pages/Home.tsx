import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scan, TrendingUp, Shield, Zap, Activity, AlertTriangle } from 'lucide-react';
import { useFarmStore } from '@/stores/farmStore';

export default function Home() {
  const { farmProfile, analyses } = useFarmStore();

  const features = [
    {
      icon: Scan,
      title: 'AI-Powered Detection',
      description: 'Advanced computer vision analyzes crop images to identify diseases with 95%+ accuracy',
    },
    {
      icon: Activity,
      title: 'Real-time Analysis',
      description: 'Get instant disease diagnosis and severity assessment within seconds',
    },
    {
      icon: Shield,
      title: 'Treatment Recommendations',
      description: 'Receive personalized, context-aware treatment plans based on your crop and conditions',
    },
    {
      icon: TrendingUp,
      title: 'Disease Trend Monitoring',
      description: 'Track disease patterns and outbreaks in your region for preventive action',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative gradient-civora text-white rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative container py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Protect Your Crops with Intelligent Disease Detection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Early diagnosis. Precise treatment. Healthier harvests. CropGuard AI provides farmers with data-driven insights to combat crop diseases effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              {farmProfile ? (
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/scan">
                    <Scan className="h-5 w-5 mr-2" />
                    Scan Crop Now
                  </Link>
                </Button>
              ) : (
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/profile">
                    Get Started
                  </Link>
                </Button>
              )}
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {analyses.length > 0 && (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="gradient-civora-subtle border-civora-lightblue">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Scans</p>
                    <p className="text-3xl font-bold text-civora-blue">{analyses.length}</p>
                  </div>
                  <Scan className="h-10 w-10 text-civora-lightblue" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-status-healthy">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Farm Protected</p>
                    <p className="text-3xl font-bold text-status-healthy">{farmProfile?.farmSize || 0} acres</p>
                  </div>
                  <Shield className="h-10 w-10 text-status-healthy" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 border-orange-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Active Alerts</p>
                    <p className="text-3xl font-bold text-orange-600">
                      {analyses.filter(a => a.severity === 'high' || a.severity === 'critical').length}
                    </p>
                  </div>
                  <AlertTriangle className="h-10 w-10 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-civora-blue mb-4">
            How CropGuard AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced agricultural technology made simple for farmers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="gradient-civora p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-civora-blue mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-civora text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Crops?</h2>
        <p className="text-lg mb-8 text-blue-100">
          Join thousands of farmers using AI-powered disease detection
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg px-8">
          <Link to={farmProfile ? "/scan" : "/profile"}>
            {farmProfile ? "Start Scanning" : "Create Farm Profile"}
          </Link>
        </Button>
      </section>
    </div>
  );
}
