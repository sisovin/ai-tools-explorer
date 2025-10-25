// Dashboard Page - Accessible after login
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User, Heart, Star, Plus, Edit, Trash2, Search, Filter, Bookmark, Activity, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';

// Mock user data
const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  toolsCount: 12,
  favoritesCount: 8
};

// Mock saved tools
const mockSavedTools = [
  {
    id: 1,
    name: 'ChatGPT',
    category: 'AI Chatbots',
    logo_url: 'https://placehold.co/60x60/6366f1/white?text=CG',
    rating: 4.8,
    savedDate: '2024-01-18',
    notes: 'Great for general conversations'
  },
  {
    id: 2,
    name: 'Midjourney',
    category: 'AI Image Assistance',
    logo_url: 'https://placehold.co/60x60/ec4899/white?text=MJ',
    rating: 4.9,
    savedDate: '2024-01-16',
    notes: 'Excellent for creative images'
  }
];

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedTools, setSavedTools] = useState(mockSavedTools);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const handleRemoveTool = (toolId: number) => {
    setSavedTools(prev => prev.filter(tool => tool.id !== toolId));
  };

  const filteredTools = savedTools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-background'>
      <div className='border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold text-foreground'>Dashboard</h1>
              <p className='text-muted-foreground mt-1'>
                Welcome back, {mockUser.name}! Manage your AI tools and preferences.
              </p>
            </div>
            <Button onClick={() => router.push('/dashboard/')} variant='outline'>
              <User className='h-4 w-4 mr-2' />
              View Profile
            </Button>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>
        <Tabs value={activeTab} onValueChange={setActiveTab} className='space-y-6'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='tools'>My Tools</TabsTrigger>
            <TabsTrigger value='activity'>Activity</TabsTrigger>
            <TabsTrigger value='settings'>Settings</TabsTrigger>
          </TabsList>

          <TabsContent value='overview' className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Saved Tools</CardTitle>
                  <Bookmark className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>{mockUser.toolsCount}</div>
                  <p className='text-xs text-muted-foreground'>+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Favorites</CardTitle>
                  <Heart className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>{mockUser.favoritesCount}</div>
                  <p className='text-xs text-muted-foreground'>Most used category: AI Chatbots</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>This Month</CardTitle>
                  <Activity className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>24</div>
                  <p className='text-xs text-muted-foreground'>Tools explored</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Avg Rating</CardTitle>
                  <Star className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>4.6</div>
                  <p className='text-xs text-muted-foreground'>Out of 5 stars</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <BarChart3 className='h-5 w-5' />
                  Usage Analytics
                </CardTitle>
                <CardDescription>Your AI tools usage patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span>AI Chatbots</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className='h-2' />
                  </div>
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span>AI Coding</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className='h-2' />
                  </div>
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span>AI Image</span>
                      <span>15%</span>
                    </div>
                    <Progress value={15} className='h-2' />
                  </div>
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span>Other</span>
                      <span>10%</span>
                    </div>
                    <Progress value={10} className='h-2' />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='tools' className='space-y-6'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='relative flex-1'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                <Input
                  placeholder='Search your saved tools...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-10'
                />
              </div>
              <Button variant='outline'>
                <Filter className='h-4 w-4 mr-2' />
                Filter
              </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredTools.map((tool) => (
                <Card key={tool.id} className='hover:shadow-lg transition-shadow'>
                  <CardHeader className='pb-3'>
                    <div className='flex items-start justify-between'>
                      <div className='flex items-center gap-3'>
                        <Image
                          src={tool.logo_url}
                          alt={tool.name}
                          width={40}
                          height={40}
                          className='w-10 h-10 rounded-lg object-cover'
                        />
                        <div>
                          <CardTitle className='text-lg'>{tool.name}</CardTitle>
                          <CardDescription>{tool.category}</CardDescription>
                        </div>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                        <span className='text-sm font-medium'>{tool.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    {tool.notes && (
                      <p className='text-sm text-muted-foreground'>{tool.notes}</p>
                    )}
                    <div className='flex items-center justify-between text-xs text-muted-foreground'>
                      <span>Saved {tool.savedDate}</span>
                      <Badge variant='secondary'>Saved</Badge>
                    </div>
                    <div className='flex gap-2'>
                      <Button size='sm' variant='outline' className='flex-1'>
                        <Edit className='h-3 w-3 mr-1' />
                        Edit
                      </Button>
                      <Button
                        size='sm'
                        variant='outline'
                        onClick={() => handleRemoveTool(tool.id)}
                        className='text-destructive hover:text-destructive'
                      >
                        <Trash2 className='h-3 w-3' />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className='text-center py-12'>
                <Bookmark className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  No saved tools found
                </h3>
                <p className='text-muted-foreground mb-4'>
                  {searchQuery ? 'Try adjusting your search terms.' : 'Start exploring and save your favorite AI tools.'}
                </p>
                <Button asChild>
                  <Link href='/'>
                    <Plus className='h-4 w-4 mr-2' />
                    Explore Tools
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value='activity' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Activity className='h-5 w-5' />
                  Activity Timeline
                </CardTitle>
                <CardDescription>Complete history of your interactions with AI tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='h-2 w-2 bg-primary rounded-full shrink-0' />
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm text-foreground'>Saved tool <span className='font-medium'>Claude</span></p>
                      <p className='text-xs text-muted-foreground mt-1'>2 hours ago</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='h-2 w-2 bg-primary rounded-full shrink-0' />
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm text-foreground'>Reviewed tool <span className='font-medium'>DALL-E 3</span></p>
                      <p className='text-xs text-muted-foreground mt-1'>1 day ago</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='h-2 w-2 bg-primary rounded-full shrink-0' />
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm text-foreground'>Updated preferences</p>
                      <p className='text-xs text-muted-foreground mt-1'>3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='settings' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <label className='text-sm font-medium'>Email Notifications</label>
                    <p className='text-sm text-muted-foreground'>Receive updates about new tools</p>
                  </div>
                  <Checkbox
                    checked={emailNotifications}
                    onCheckedChange={(checked) => setEmailNotifications(checked === true)}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <label className='text-sm font-medium'>Weekly Digest</label>
                    <p className='text-sm text-muted-foreground'>Get weekly summaries of your activity</p>
                  </div>
                  <Checkbox
                    checked={weeklyDigest}
                    onCheckedChange={(checked) => setWeeklyDigest(checked === true)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
